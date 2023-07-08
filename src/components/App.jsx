import { Header } from '../pages/Header/Header';
import { MainPage } from '../pages/MainPage/MainPage';
import { Footer } from '../pages/Footer/Footer';
import { RegisterPage } from 'pages/Register/RegisterPage';

export const App = () => {
  return (
    <>
      <Header />
      <RegisterPage />
      <MainPage />
      <Footer />
    </>
  );
};
