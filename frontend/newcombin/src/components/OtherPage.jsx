const tw = {
  container: `
    grid grid-rows-1 mx-auto`,
  titulo: `
    text-white text-5xl font-extrabold
    flex justify-center items-center`,
};

export const OtherPage = () => {
  return (
    <div className={tw.container}>
      <div className={tw.titulo}>OTHER PAGE</div>
    </div>
  );
};
