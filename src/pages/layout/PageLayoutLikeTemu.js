import Layout from "./Layout";
import TopBarLayoutLikeTemu from "./TopBarLayoutLikeTemu";

const PageLayoutLikeTemu = ({children, topBar = false, bottomBar = false, className = "bg-gray-600"}) => {
    return (
        <Layout className={className}>
            {topBar && <TopBarLayoutLikeTemu>{topBar}</TopBarLayoutLikeTemu>}
            <div className="w-full mt-6 px-3">
                {children}
            </div>
            {bottomBar}
        </Layout>
    );
}

export default PageLayoutLikeTemu;
