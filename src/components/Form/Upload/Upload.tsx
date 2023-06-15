import { Icon } from '@/components/Icon';
import { useState } from 'react';

// TODO: Add Cloudinary support
// TODO: Add comments for documentation

interface UploadProps {
  multiple?: boolean;
}

const Upload = ({ multiple = true }: UploadProps) => {
  const [isHighlightShowing, setIsHighlightShowing] = useState(false);
  const [files, setFiles] = useState<File[]>([]);

  const stopDefaults = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const addHighlight = (e: React.DragEvent<HTMLDivElement>) => {
    stopDefaults(e);
    setIsHighlightShowing(true);
  };

  const removeHighlight = (e: React.DragEvent<HTMLDivElement>) => {
    stopDefaults(e);
    setIsHighlightShowing(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    stopDefaults(e);
    setIsHighlightShowing(false);
    console.log('dropped files');
    const droppedFiles = Array.from(e.dataTransfer.files);
    setFiles((prevFiles) => [...prevFiles, ...droppedFiles]);
    console.log({ files });
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = Array.from(e.target.files as FileList);
    setFiles((prevFiles) => [...prevFiles, ...selectedFiles]);
    console.log({ files });
  };

  return (
    <div
      className={`upload-label border-b-white hover:border-b-uclaGold hover:text-uclaGold border-dashed border-2 rounded-[4px] center p-4 gap-2 relative flex items-center justify-center gap-x-2 text-sm cursor-pointer ${
        isHighlightShowing ? 'border-b-uclaGold text-uclaGold' : ''
      }`}
      onDrop={handleDrop}
      onDragEnter={addHighlight}
      onDragOver={addHighlight}
      onDragLeave={removeHighlight}
      onDragExit={removeHighlight}
    >
      <Icon name="upload" />
      <p>Select a File on your Computer or Drag and Drop here.</p>
      <input
        type="file"
        name="upload"
        className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
        multiple={multiple}
        accept="image/*"
        onChange={handleFileUpload}
      />
    </div>
  );
};

export { Upload };
