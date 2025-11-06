import { UserOutlined } from "@ant-design/icons";
import { Avatar, Layout } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { logoutStateFn } from "../../features/auth/authSlice";
import { logoutUrl } from "../../utils";
import {
    TextDynamic,
    PrimaryDropdown,
    defaultDropdownOverlayStyle,
} from "abzed-utils";
import { avatarItemsFn } from "../../items_list/itemList";
import { MainNavbar } from "../navigation";
const { Header } = Layout;

export default function MainLayout() {
    const dispatch = useDispatch();

    const { user } = useSelector((state) => state.auth);

    const handleLogout = () => {
        dispatch(logoutStateFn());
        window.location.href = logoutUrl;
    };

    const avatarItems = avatarItemsFn(handleLogout);

    return (
        <MainNavbar
            component={
                <MainLayoutHeader user={user} avatarItems={avatarItems} />
            }
        />
    );
}

const MainLayoutHeader = ({ user, avatarItems }) => (
    <Header style={{ padding: 0, background: "#fff", display: "flex" }}>
        <div className="w-full fx_btwn_center px-6">
            <div className="ml-auto">
                <PrimaryDropdown
                    items={avatarItems}
                    triggerButton={
                        <div className="fx_item_center gap-[.35rem]">
                            <Avatar size={31} icon={<UserOutlined />} />
                            <div className="fx_col">
                                <TextDynamic
                                    className={"txt_75_medium"}
                                    text={user?.usrFullName}
                                />
                                <TextDynamic
                                    className={"txt_625"}
                                    text={user?.usrEmail}
                                />
                            </div>
                        </div>
                    }
                    overlayStyle={defaultDropdownOverlayStyle}
                />
            </div>
        </div>
    </Header>
);
