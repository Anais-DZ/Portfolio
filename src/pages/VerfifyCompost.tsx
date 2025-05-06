import Header from "../componants/Header";
import LayoutProject from "../componants/LayoutProject";
import Footer from "../componants/Footer";


function VerifyCompost() {

    return (
        <>
            <Header />

            <LayoutProject
                Image={["/verifScreenShot.webp", "/verifScreenShot2.webp"]}
                Title={["Ver\'ify Compost", "Lien Github de Ver\'ify Compost"]}
                Description={""}
                Link={["https://verify-compost.vercel.app/", "https://github.com/Anais-DZ/Verify-compost"]}
                ButtonHref={""}
                TitleButton=""
            />

            <Footer />
        </>

    );
}

export default VerifyCompost;
