import { useRef, useState, useEffect } from "react"
import { adjectives } from "../components/words/adjectives"
import { animals } from "../components/words/animals"
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
    const [idea, setIdea] = useState(``)
    const input = useRef(null);
    const [form, setForm] = useState<FormState>({ state: Form.Initial });

    useEffect(() => setIdea(`${adjectives[Math.floor(Math.random() * adjectives.length)]}-${animals[Math.floor(Math.random() * animals.length)]}`), [])

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

    return (
        <div>
            <Stage
                one={true}
            />
            <div className="grid place-items-center mt-32">
                <h1 className="text-5xl font-medium">Create your grooove!</h1>
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
                <p className="mt-4"><>
                    struggling for ideas? <span className="font-semibold">{idea}</span> has a nice ring to it!
                </></p>
            </div>
        </div>
    )
}
