import Layout from "./Layout";
import TopBarLayout from "./TopBarLayout";

const PageLayout = ({ children, topBar = false, bottomBar = false, className = "bg-gray-500" }) => {
    return (
        <Layout className={className}>
            {topBar && <TopBarLayout>{topBar}</TopBarLayout>}
            <div className="w-full pb-[75px]">
                {children}
            </div>
            {bottomBar && (
                <div className="fixed bottom-0 left-0 right-0 z-40 bg-white shadow-top">
                    {bottomBar}
                </div>
            )}
        </Layout>
    );
}

export default PageLayout;
