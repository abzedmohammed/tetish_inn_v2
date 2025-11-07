import { Link } from "react-router-dom";
import {
    FormInputPassword,
    DynamicBtn,
    TextDynamic,
    AntdForm,
} from "abzed-utils";
import { ArrowLeftSvg } from "../../../svgs";
import { passwordChecks, passwordDefault, passwordOk } from "../../../utils";

export default function PasswordFormComponent({
    form,
    onFinish,
    text = "Submit",
    showBackBtn = true,
    headerText,
    subHeaderText,
    isProcessing,
    watchedValues,
}) {
    const pswd = watchedValues?.usrEncryptedPassword || "";

    return (
        <div className="p-3 md:p-0 fx_col gap-[1.88rem] mt-5 md:mt-[5.19rem]">
            <div className="fx_col text-center gap-6">
                <TextDynamic
                    text={headerText}
                    className={"txt_1_875_bold text-amber-700"}
                />
                <TextDynamic
                    text={subHeaderText}
                    className={"txt_9375 text-[#3D3D3D]"}
                />
            </div>

            <AntdForm form={form} handleSubmit={onFinish} formName={"login"}>
                <div className="w-full fx_col gap-5">
                    <FormInputPassword
                        inputClassName={"auth_input"}
                        inputName={"usrEncryptedPassword"}
                        label={"Password"}
                    />

                    <FormInputPassword
                        inputClassName={"auth_input"}
                        inputName={"usrEncryptedPasswordAlt"}
                        label={"Confirm Password"}
                    />

                    <div className="w-full grid grid-cols-2 gap-[.94rem] mt-[1.88rem]">
                        {passwordChecks.map((item) => {
                            const isValid = item.valid(pswd);

                            return (
                                <DynamicBtn
                                    key={item.label}
                                    className="plain_btn"
                                    text={
                                        <span
                                            style={{
                                                color: isValid
                                                    ? passwordOk
                                                    : passwordDefault,
                                            }}
                                            className="txt_875"
                                        >
                                            {item.label}
                                        </span>
                                    }
                                />
                            );
                        })}
                    </div>
                </div>

                <div className="fx_col mt-[1.88rem] gap-[1.88rem]">
                    <DynamicBtn
                        width={"100%"}
                        className={"primary_btn"}
                        text={text}
                        type="submit"
                        isProcessing={isProcessing}
                    />
                    {showBackBtn && (
                        <Link className="fx_center" to="/auth/login">
                            <div className="fx_item_center gap-2.5">
                                <ArrowLeftSvg />
                                <TextDynamic
                                    text={"Back to Log in"}
                                    className={"txt_8125_semi text-[#3D3D3D]"}
                                />
                            </div>
                        </Link>
                    )}
                </div>
            </AntdForm>
        </div>
    );
}
