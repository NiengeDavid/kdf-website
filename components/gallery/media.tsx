"use client";

import { useState, useEffect } from "react";
import { MapPin, Calendar } from "lucide-react";
import {
  getClient,
  getAllGalleries,
  getAllHighlightVideos,
} from "@/sanity/lib/sanity.client";
import type { Gallery, HighlightVideo } from "@/sanity/lib/sanity.queries";
import { readToken } from "@/sanity/lib/sanity.api";
import { Input } from "@/components/ui/input";
import Container from "../Container";

export default function Media() {
  const client = getClient({ token: readToken });
  const [galleries, setGalleries] = useState<Gallery[]>([]);
  const [highlightVideos, setHighlightVideos] = useState<HighlightVideo[]>([]);
  const [filteredGallery, setFilteredGallery] = useState<Gallery[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedYear, setSelectedYear] = useState("All Years");
  const [selectedField, setSelectedField] = useState("All Fields");
  const [isLoading, setIsLoading] = useState(true); // Loading state

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true); // Start loading
      try {
        const galleriesData = await getAllGalleries(client);
        const highlightVideosData = await getAllHighlightVideos(client);
        setGalleries(galleriesData);
        setFilteredGallery(galleriesData);
        setHighlightVideos(highlightVideosData);
      } catch (error) {
        console.error("Error fetching galleries:", error);
      } finally {
        setIsLoading(false); // End loading
      }
    };

    fetchData();
  }, []); // Removed `client` from the dependency array

  // Optimized filtering logic
  useEffect(() => {
    const filtered = galleries.filter((item) => {
      const matchesYear =
        selectedYear === "All Years" || item.year === selectedYear;
      const matchesField =
        selectedField === "All Fields" ||
        item.department?.name === selectedField;
      const matchesSearch =
        !searchTerm ||
        item.department?.name.toLowerCase().includes(searchTerm.toLowerCase());

      return matchesYear && matchesField && matchesSearch;
    });

    setFilteredGallery(filtered);
  }, [searchTerm, selectedYear, selectedField, galleries]);

  if (isLoading) {
    return (
      <div className="text-center py-10">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="bg-white py-10">
      <Container>
        <div className="max-w-6xl mx-auto px-6">
          {/* Search and Filters */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-20 shadow-lg p-6 rounded-md border border-bg3">
            {/* Search Bar */}
            <div className="w-full">
              <Input
                type="text"
                placeholder="🔍︎  Search gallery..."
                className="border border-gray-300 rounded-md px-4 py-6 w-full md:w-[698px]"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <div className="w-full flex justify-start items-center mx-auto gap-4 md:justify-end">
              {/* Filters */}
              <select
                className="border border-gray-300 rounded-md px-4 py-2"
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
              >
                <option>All Years</option>
                {[...new Set(galleries.map((item) => item.year))].map(
                  (year) => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  )
                )}
              </select>

              <select
                className="border border-gray-300 rounded-md px-4 py-2"
                value={selectedField}
                onChange={(e) => setSelectedField(e.target.value)}
              >
                <option>All Fields</option>
                {[
                  ...new Set(galleries.map((item) => item.department?.name)),
                ].map((field) => (
                  <option key={field} value={field}>
                    {field}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Highlight Videos */}
          <div className="w-full mb-18">
            <h1 className="text-center text-2xl font-extrabold text-black mb-6 md:text-4xl">
              Featured Highlights
            </h1>

            {/* Videos go here */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {highlightVideos.map((video) => (
                <div
                  key={video._id}
                  className="relative w-full bg-gray-100 rounded-lg shadow-md border p-4"
                >
                  {/* Video Player */}
                  <video
                    controls
                    className="w-full h-48 object-cover rounded-md mb-4"
                    src={video.video.asset.url}
                  ></video>

                  {/* Video Details */}
                  <h2 className="text-lg font-bold text-gray-900 my-3">
                    {video.title}
                  </h2>

                  <div className="flex gap-4 items-center justify-between">
                    <p className="flex items-center gap-2 text-sm text-gray-600">
                      <Calendar className="w-4 h-4 text-gray-500" />{" "}
                      {new Date(video.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </p>
                    <p className="flex items-center gap-2 text-sm text-gray-600">
                      <MapPin className="w-4 h-4 text-gray-500" />{" "}
                      {video.location}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Gallery Images */}
          <div className="w-full">
            <h1 className="text-center text-2xl font-extrabold text-black mb-6 md:text-4xl">
              Gallery
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredGallery.map((item) => (
                <div key={item._id} className="relative">
                  <img
                    src={item.image.asset.url}
                    alt={item.department?.name}
                    className="w-full h-48 object-cover rounded-md shadow-md"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Load More Button */}
          <div className="text-center mt-8">
            <button
              className="bg-primary-red text-white px-6 py-2 rounded-md hover:bg-primary-red/80"
              onClick={() => {
                // Implement load more functionality if needed
              }}
            >
              Load More
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
}
