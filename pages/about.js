import Layout from '../components/Layout';

const About = () => (
    <Layout title="About">
        <h1>Hakkımda</h1>
        <ul className="company-info">
            <li>
                <span className="company">Kerim Demir</span>
            </li>
            <li>Çankaya, Ankara</li>

            <li>
                <a href="mailto:kerimdemir@gmai.com">kerimdemir@gmail.com</a>
            </li>
        </ul>
        <div className="about-text">
            <img src="/static/studio.jpg"/>
            <p>


            </p>
            <p>
                Adım Kerim. 1994 Ordu/Ünye doğumluyum. Lise'yi
                Ünye Anadolu Lisesi'nde okudum ve buradan 2012'de mezun oldum. 2017 yılında Düzce Üniversitesi
                Bilgisayar Mühendisliğinden mezun oldum. Ankara'da tam zamanlı olarak 2018'den itibaren çalışmaktayım.
            </p>
            <p>
                React Native ile mobil uygulamalar geliştiriyorum. React Native'i Redux, Hooks ve güncel teknolojilerle birlikte kullanıyorum.
                Web tarafında Reactjs ve Nextjs ile ilgileniyorum. <br/><br/>



                Project Portfolio:   <b><a href={"https://sites.google.com/view/bmkerimdemirprojectportfolio"}>https://sites.google.com/view/bmkerimdemirprojectportfolio</a></b><br/>
                Github adresim:       <b><a href={"https://github.com/kerimdemir"}> https://github.com/kerimdemir </a></b><br/>
                LinkedIn hesabım:     <b><a href={"https://www.linkedin.com/in/kerim-demir-1174a7120/"}> https://www.linkedin.com/in/kerim-demir-1174a7120/</a> </b><br/>
                Web Sitesi (kişisel):    <b><a href={"https://www.linkedin.com/in/kerim-demir-1174a7120/"}>https://kerimdemir.netlify.com/</a> </b><br/>




            </p>
        </div>
        <style jsx>{`
      .company-info {
        margin: 0 0 100px 0;
        padding: 0;
        list-style: none;
        font-size: 18px;
      }
      .company {
        font-weight: 700;
        font-size: 24px;
      }
      .about-text {
        color: #777;
        text-align: left;
        max-width: 800px;
        margin: 0 auto 100px;
        padding: 20px;
      }
      img {
      width: 300px;
      height: 200px;
        float: right;
        margin: 10px 0 20px 20px;
      }
      @media (max-width: 600px) {
        .about-text img {
          float: none;
          display: block;
          margin: 0 auto 30px;
        }
      }
    `}</style>
    </Layout>
);

export default About;
