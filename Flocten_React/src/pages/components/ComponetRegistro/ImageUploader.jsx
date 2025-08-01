const ImageUploader = ({ label, fieldName, imageUrl, uploadProgress, onImageUpload }) => (
    <div className="">
      <label className="block text-lg font-bold text-base-content">{label}</label>
      {imageUrl && (
        <img 
          src={imageUrl} 
          alt={label} 
          className="mt-2 h-32 object-contain border rounded  "
        />
      )}
      <input
        type="file"
        onChange={(e) => onImageUpload(e, fieldName)}
        className="mt-2 block w-full text-lg font-bold text-base-content file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
        accept="image/*"
      />
      {uploadProgress > 0 && uploadProgress < 100 && (
        <div className="w-full  bg-gray-200 rounded-full h-2.5 mt-2">
          <div 
            className="bg-amber-600 h-2.5 rounded-full" 
            style={{ width: `${uploadProgress}%` }}
          ></div>
        </div>
      )}
    </div>
  );
  
  export default ImageUploader;