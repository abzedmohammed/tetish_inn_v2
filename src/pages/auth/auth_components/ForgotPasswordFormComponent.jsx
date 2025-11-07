import { Link } from "react-router-dom";
import { FormInputEmail, AntdForm, DynamicBtn, TextDynamic } from "abzed-utils";
import { ArrowLeftSvg } from "../../../svgs";

export default function ForgotPasswordFormComponent({
    form,
    onFinish,
    isProcessing,
}) {
    return (
        <div className="w-full fx_center">
            <div className="w-full p-3 md:p-8 fx_col gap-[1.88rem] shadow-md shadow-amber-200 mt-5">
                <div className="fx_col text-center gap-6">
                    <h1 className="text-4xl font-bold text-amber-700">
                        <span className="border-b-4 border-amber-400 text-amber-900">
                            Reset
                        </span>{" "}
                        Password
                    </h1>

                    <TextDynamic
                        text={`If you have an account, we'll send a reset link to your email & phone number`}
                        className={"txt_9375 text-[#3D3D3D]"}
                    />
                </div>

                <AntdForm
                    form={form}
                    handleSubmit={onFinish}
                    formName={"forgot-password"}
                >
                    <FormInputEmail
                        inputClassName={"auth_input"}
                        label={"Email"}
                        inputName={"email"}
                        placeholder={"Email"}
                    />

                    <div className="fx_col mt-[1.88rem] gap-[1.88rem]">
                        <DynamicBtn
                            width={"100%"}
                            className={"primary_btn"}
                            text={"Send reset link"}
                            type="submit"
                            isProcessing={isProcessing}
                        />

                        <Link className="fx_center" to="/auth/login">
                            <div className="fx_item_center gap-2.5">
                                <ArrowLeftSvg />
                                <TextDynamic
                                    text={"Back to Log in"}
                                    className={"txt_8125_semi text-[#3D3D3D]"}
                                />
                            </div>
                        </Link>
                    </div>
                </AntdForm>
            </div>
        </div>
    );
}
