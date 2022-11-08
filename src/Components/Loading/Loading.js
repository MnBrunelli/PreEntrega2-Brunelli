const Loading = () => {
  return (
    <div className="text-center m-5">
      <div className="spinner-border text-danger" style={{ width: "5rem", height: "5rem" }} role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
      <p className="">Cargando...</p>
    </div>
  );
};

export default Loading;
