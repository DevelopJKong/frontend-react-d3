const MainPage = () => {
  return (
    <svg width='1300' height='500'>
      <circle cx='50' cy='50' r='50'></circle>
      <circle cx='150' cy='50' r='50' fill='red'></circle>
      <circle cx='250' cy='50' r='20' fill='red'></circle>
      <rect x='1' y='1' width='800' height='400' fill='none' stroke='blue' stroke-width='2' />
      <rect x='400' y='100' width='800' height='200' fill='yellow' stroke='navy' stroke-width='10' />
      <line x1='0' y1='0' x2='100' y2='100' stroke='red'></line>
    </svg>
  );
};

export default MainPage;
