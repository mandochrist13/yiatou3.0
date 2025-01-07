import MessageItem from "../../components/MessageItem/MessageItem";
import TopBarWithButtonBack from "../../components/topBar/TopBarWithButtonBack";
import PageLayout from "../layout/PageLayout";

const Messages = () => {
    return (
        <PageLayout topBar={<TopBarWithButtonBack link="/" title="Messagerie"/>}>
            <div className="px-3 py-4 min-h-[90vh] bg-white h-full mt-6">
                <p className="text-center mt-3 mb-5 text-gray-500 font-medium">Ajourd'hui</p>
                <div className="flex flex-col gap-4">
                    <MessageItem/>
                    <MessageItem/>
                    <MessageItem/>
                    <MessageItem/>
                    <MessageItem/>
                    <MessageItem/>
                    <MessageItem/>
                </div>
            </div>
        </PageLayout>
    );
}

export default Messages;
