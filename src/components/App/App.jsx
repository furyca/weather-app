import Location from "../Location/Location";
import TodayForecast from "../TodayForecast/TodayForecast";
import ForecastList from "../ForecastList/ForecastList";
import Header from "../Header/Header";
import style from './App.module.scss'
import Search from "../Search/Search";
import Footer from "../Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <div className={style.container}>
        <Search />
        <Location />
        <TodayForecast />
        <ForecastList />
      </div>
      <Footer />
    </>
  );
}

export default App;
