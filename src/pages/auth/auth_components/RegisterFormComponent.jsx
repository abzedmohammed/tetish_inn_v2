import flags from "react-phone-number-input/flags";
import "react-phone-number-input/style.css";

import {
    FormInput,
    FormInputEmail,
    FormInputPassword,
    FormInputPhone,
    AntdForm,
    DynamicBtn,
    TextDynamic,
} from "abzed-utils";
import { Link } from "react-router-dom";
import { GoogleSvg } from "../../../svgs";
import { passwordChecks, passwordDefault, passwordOk } from "../../../utils";

export default function RegisterFormComponent({
    form,
    onFinish,
    isProcessing,
    watchedPassword,
}) {
    return (
        <div className="w-full fx_center">
            <div className="w-full md:w-[55%] p-3 md:p-8 fx_col gap-[1.88rem] shadow-md shadow-amber-200 mt-5">
                <div className="fx_col text-center gap-6">
                    <h1 className="text-4xl font-bold text-amber-700">
                        <span className="border-b-4 border-amber-400 text-amber-900">
                            Hello
                        </span>{" "}
                        Esteemed Customer
                    </h1>
                    <TextDynamic
                        text={"Please fill in your personal details."}
                        className={
                            "txt_9375 text-[#3D3D3D] max-w-[290px] md:max-w-full"
                        }
                    />
                </div>

                <AntdForm
                    form={form}
                    handleSubmit={onFinish}
                    formName={"login"}
                >
                    <div className="w-full fx_col gap-5">
                        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-5">
                            <FormInput
                                inputClassName={"auth_input"}
                                inputName={"names"}
                                label={"Full name"}
                            />

                            <FormInputEmail
                                inputClassName={"auth_input"}
                                inputName={"email"}
                                label={"Email"}
                            />

                            <FormInputPhone
                                flags={flags}
                                inputClassName={"auth_input"}
                                inputName={"phone"}
                                label={"Phone Number"}
                            />

                            <FormInputPassword
                                inputClassName={"auth_input"}
                                inputName={"password"}
                                placeholder="Password"
                                label="Password"
                            />
                        </div>
                    </div>

                    <div className="w-full grid grid-cols-2 gap-[.94rem] mt-[1.88rem]">
                        {passwordChecks.map((item) => {
                            const isValid = item.valid(watchedPassword);

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

                    <div className="fx_col mt-[1.56rem] gap-[1.88rem]">
                        <DynamicBtn
                            isProcessing={isProcessing}
                            width={"100%"}
                            className={"primary_btn"}
                            text={"Continue"}
                            type="submit"
                        />

                        <div className="w-full h-[.03125rem] bg-[#E5E5E5]"></div>

                        <DynamicBtn
                            className={"google_btn"}
                            text={"Or sign up with Google"}
                            width={"100%"}
                            icon={<GoogleSvg />}
                        />

                        <TextDynamic
                            text={
                                <span>
                                    Already have an account?{" "}
                                    <Link
                                        className="font-bold underline! text-[#3D3D3D]!"
                                        to={"/auth/login"}
                                    >
                                        Log In
                                    </Link>
                                </span>
                            }
                            className={
                                "txt_8125_medium text-[#3D3D3D] text-center"
                            }
                        />
                    </div>
                </AntdForm>
            </div>
        </div>
    );
}
