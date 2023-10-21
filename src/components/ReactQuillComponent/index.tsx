import React from "react";
import dynamic from "next/dynamic";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

function ReactQuillComponent({
  long_description,
  setLongDescription,
}: {
  long_description: string;
  setLongDescription: (e: string) => void;
}) {
  // If it's server-side rendering, return a placeholder.
  if (typeof window === "undefined") {
    return <p>Loading editor...</p>;
  }

  return (
    <ReactQuill
      theme="snow"
      className="text-black"
      value={long_description}
      onChange={setLongDescription}
    />
  );
}

export default ReactQuillComponent;
