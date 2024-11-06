const Spinner = ({ size = 16, color = 'blue-500' }) => {  
  return (
    <div className="flex items-center justify-center h-screen">
      <div className={`animate-spin rounded-full h-${size} w-${size} border-t-4 border-b-4 border-${color}`}></div>
      <span className="sr-only">Loading</span>
    </div>
  );
};
  export default Spinner;
