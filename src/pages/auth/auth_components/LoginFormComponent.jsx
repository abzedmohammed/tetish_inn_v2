import { Checkbox } from "antd";
import {
    AntdForm,
    FormInput,
    FormInputPassword,
    DynamicBtn,
    TextDynamic,
} from "abzed-utils";
import { Link } from "react-router-dom";
import { GoogleSvg } from "../../../svgs";

export default function LoginFormComponent({ form, onFinish, isProcessing }) {
    return (
        <div className="p-3 md:p-0 fx_col gap-5 mt-5 md:mt-[6.69rem]">
            <div className="text-center text-amber-800">
                <h1 className="text-6xl font-bold">Your Home For Snacks!</h1>
                <p className="py-6 font-semibold">
                    Login to you account to get the best experience <br /> while you
                    browse and order mouth watering, eye cooling snack.
                </p>
            </div>

            <DynamicBtn
                className={"google_btn"}
                text={"Sign In with Google"}
                icon={<GoogleSvg />}
                width={"100%"}
            />

            <div className="w-full h-[.03125rem] bg-[#E5E5E5]"></div>

            <AntdForm form={form} handleSubmit={onFinish} formName={"login"}>
                <div className="w-full fx_col gap-5">
                    <FormInput
                        label={"Email"}
                        inputClassName={"auth_input"}
                        inputName={"email"}
                        placeholder={"Enter your email"}
                    />

                    <FormInputPassword
                        label={"Password"}
                        inputClassName={"auth_input"}
                        inputName={"password"}
                        placeholder="Password"
                    />

                    <div className="w-full fx_btwn_center gap-5 flex-wrap">
                        <Checkbox className="auth_checkbox">
                            <TextDynamic
                                text={"Remember me"}
                                className={"txt_8125_medium text-[#3D3D3D]"}
                            />
                        </Checkbox>
                        <Link
                            to={"/auth/forgot-password"}
                            className="txt_8125_medium text-[#3D3D3D]!"
                        >
                            Forgot Password?
                        </Link>
                    </div>
                </div>

                <div className="fx_col mt-10 gap-10">
                    <DynamicBtn
                        isProcessing={isProcessing}
                        width={"100%"}
                        className={"primary_btn"}
                        text={"Log In"}
                        type="submit"
                    />

                    <TextDynamic
                        text={
                            <span>
                                Don&apos;t have an account?{" "}
                                <Link
                                    className="font-bold underline! text-[#3D3D3D]!"
                                    to={"/auth/register"}
                                >
                                    Sign Up
                                </Link>
                            </span>
                        }
                        className={"txt_8125_medium text-[#3D3D3D]"}
                    />
                </div>
            </AntdForm>
        </div>
    );
}
