import { useRef, useState } from "react"
import Link from "next/link"
import Stage from "../components/onboarding/Stage"
import Button from "../components/elements/button"

export enum Form {
    Initial,
    Loading,
    Success,
    Error
}

export type FormState = {
    state: Form;
    message?: string;
};

export default function New() {
    const input = useRef(null);
    const [form, setForm] = useState<FormState>({ state: Form.Initial });
/*
    const createNew = async (e) => {
        console.log(input);
        e.preventDefault();
        setForm({ state: Form.Loading });

        const response = await fetch("/api/create", {
            body: JSON.stringify({
                body: input.current.value
            }),
            headers: {
                "Content-Type": "application/json"
            },
            method: "POST"
        });

        const { error } = await response.json();
        if (error) {
            setForm({
                state: Form.Error,
                message: error
            });
            return;
        }

        input.current.value = "";
        setForm({
            state: Form.Success,
        })
    };
 */

    return (
        <div>
            <Stage
                one={true}
            />
            <div className="grid place-items-center mt-32">
                <h1 className="text-5xl font-medium">Create your groove!</h1>
                <form className="mt-16 flex justify-center place-items-center">
                    <input
                        type="text"
                        ref={input}
                        placeholder="Groove name"
                        className="rounded-lg p-4 w-96 text-center bg-gray-100 mr-4"
                        required
                    />
                    {/*<Link href="/new/two">*/}
                        <Button
                            type="submit"
                        >
                            Onwards!
                        </Button>
                    {/*</Link>*/}
                </form>
            </div>
        </div>
    )
}
