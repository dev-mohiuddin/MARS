

import { FileIcon, UploadCloudIcon, XIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Skeleton } from "@/components/ui/skeleton";


function ImageUploader({
  imageFile,
  setImageFile,
  uploadedImageUrl,
  setUploadedImageUrls,
  isEditMode,
  isCustomStyling = false,
  multiple
}) {
  const inputRef = useRef(null);
  const [loading, setLoading] = useState([]); // Array for multiple file progress

  // Handle file change (from file input)
  function handleImageFileChange(event) {
    const selectedFiles = event.target.files;
    if (selectedFiles) {
      setImageFile((prevFiles = []) => [
        ...prevFiles,
        ...Array.from(selectedFiles),
      ]);

      // Initialize loading for new files
      const newLoadingState = Array.from(selectedFiles).map(() => 0);
      setLoading((prevLoading) => [...prevLoading, ...newLoadingState]);
    }
  }

  // Handle drag over event
  function handleDragOver(event) {
    event.preventDefault();
  }

  // Handle drop event
  function handleDrop(event) {
    event.preventDefault();
    const droppedFiles = event.dataTransfer.files;
    if (droppedFiles) {
      setImageFile((prevFiles = []) => [
        ...prevFiles,
        ...Array.from(droppedFiles),
      ]);

      // Initialize loading for dropped files
      const newLoadingState = Array.from(droppedFiles).map(() => 0);
      setLoading((prevLoading) => [...prevLoading, ...newLoadingState]);
    }
  }

  // Remove image from the list
  function handleRemoveImage(index) {
    setImageFile((prevFiles) => prevFiles.filter((_, i) => i !== index));
    setLoading((prevLoading) => prevLoading.filter((_, i) => i !== index));
  }

  // Upload image to Cloudinary
  async function uploadImageToServer() {
    try {
      const promises = imageFile.map((file, index) => {
        const data = new FormData();
        data.append("my_files", file);

        return axios.post(`api-example.com`, data, {
          onUploadProgress: (progressEvent) => {
            const progress = Math.round(
              (progressEvent.loaded / progressEvent.total) * 100
            );
            setLoading((prevLoading) =>
              prevLoading.map((load, i) => (i === index ? progress : load))
            );
          },
          headers: {
            "Content-Type": "multipart/form-data",
          },
          withCredentials: true,
        });
      });

      const responses = await Promise.all(promises);
      const successfulUploads = responses
        .filter((response) => response?.data?.success)
        .map((response) => response.data.uploadedFiles.map((res) => ({
          url: res?.url,
          type: res?.type || "",
        })));

      setUploadedImageUrls((prevUrls) => [
        ...prevUrls,
        ...successfulUploads.flat(),
      ]);
    } catch (error) {
      console.error("Error uploading images:", error);
    } finally {
      // setLoading([]);
    }
  }

  // Trigger image upload when the imageFile changes
  useEffect(() => {
    if (imageFile?.length > 0) uploadImageToServer();
  }, [imageFile]);

  console.log(loading)

  return (
    <div
      className={`w-full mt-4 ${isCustomStyling ? "" : "max-w-md mx-auto"}`}
    >
      <Label className="text-lg font-semibold mb-2 block">Upload Images</Label>
      <div
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        className={`${isEditMode ? "opacity-60" : ""
          } border-2 border-dashed rounded-lg p-4`}
      >
        <Input
          id="image-upload"
          type="file"
          className="hidden"
          ref={inputRef}
          onChange={handleImageFileChange}
          disabled={isEditMode}
          name="my_files"
          multiple={multiple}
        />
        <Label
          htmlFor="image-upload"
          className={`${isEditMode ? "cursor-not-allowed" : ""
            } flex flex-col items-center justify-center h-24 cursor-pointer`}
        >
          <UploadCloudIcon className="w-10 h-10 text-muted-foreground mb-2" />
          <span className="text-center">
            {multiple ? "Drag & drop or click to upload images/videos": "Drag & drop or click to upload Single Image or Video" }
          </span>
        </Label>
        {imageFile && imageFile.length > 0 && (
          <div className="border-t">
            {imageFile.map((file, index) => (
              <div
                key={index}
                className="flex items-center justify-between mb-2"
              >
                <div className="flex items-center w-full">
                  <div className="flex items-center">
                    <FileIcon className="w-5 text-primary mr-1 h-8" />
                  </div>
                  <div className="w-full">
                    <p className="text-sm font-medium">
                      {file.name.substring(0, 24)}
                    </p>
                    <Progress
                      value={loading[index] || 0}
                      className="bg-secondary h-[10px] w-full"
                    />
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-red-500 hover:text-red-700"
                  onClick={() => handleRemoveImage(index)}
                >
                  <XIcon className="w-4 h-4" />
                  <span className="sr-only">Remove File</span>
                </Button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default ImageUploader;



