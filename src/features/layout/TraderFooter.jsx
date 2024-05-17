import "./stylefooter.css";
function TraderFooter() {
  // let date = new Date().getFullYear();
  return (
    <div className="footer">
      <div className="container">
        <div className="Sec">
          <h2>حول عنا</h2>
          <p>
            الموقع يقدم منصة للشركات والتجار للتواصل وإقامة علاقات تجارية بينهم
            تسهيل عمليات البيع والشراء للمنتجات أو الخدمات بين الشركات والتجار
          </p>
        </div>
        <div className="Sec">
          <h2>خدماتنا </h2>
          <p>
            نحن نقدم افضل الخدمات التي تعود بالمنفعة علي كلا من الشركة والتاجر
            لتحقيق اهدافهم من خلال موقعنا
          </p>
        </div>
        <div className="Sec">
          <h2> الروابط المهمة</h2>
          <ul>
            <li>
              <a href="#main">الصفحة الرئيسية</a>
            </li>
            <li>
              <a href="#about"> المنتجات </a>
            </li>
            <li>
              <a href="#services"> طلباتي </a>
            </li>
            <li>
              <a href="#steps"> صفحتي </a>
            </li>
          </ul>
        </div>
      </div>
      {/* <div className="copyright">
        <div></div>
        <p className="lastsentence">حقوق النشر كلها محفوظة سنة {date}</p>
      </div> */}
    </div>
  );
}

export default TraderFooter;
