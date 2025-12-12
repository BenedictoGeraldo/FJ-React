function EventHandling() {
  const handleClick = () => {
    alert("Button berhasil di klik!");
  };

  return (
    <div>
      <button onClick={handleClick} className="rounded-none bg-slate-500">
        Klik Saya
      </button>
    </div>
  );
}

export default EventHandling;
