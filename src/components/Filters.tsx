import type {ReactNode} from "react";
import {Form, Link, useNavigation} from "react-router-dom";
import {FormInput} from "@/components";
import {Button} from "@/components/ui/button.tsx";

export const Filters = ({term, mode}: { term: string | undefined, mode: string }): ReactNode => {
    console.log(mode)
    const navigation = useNavigation();

    // On vérifie si le formulaire est en train d'être envoyé (tout cela rendu possible grace au LoaderFunction)
    const isSearching = navigation.state === "submitting" || (navigation.state === "loading" && navigation.formData !== null);

    return (
        <Form className={`my-6 py-2 flex flex-col gap-2 ${isSearching ? "opacity-50 pointer-events-none" : ""}`}>
            <FormInput
                type="search"
                label="Search for"
                name="term"
                defaultValue={term ?? ""}
                placeholder="'quasar' 'neutron star' 'starship'"
            />
            <div className={"self-end flex gap-2"}>
                <Button
                    type="submit"
                    size="lg"
                    disabled={isSearching}
                >Search</Button>
                <Button
                    type="button"
                    variant="outline"
                    size="lg"
                    disabled={isSearching}
                >
                    <Link to={"/news"}>Reset</Link>
                </Button>
            </div>
        </Form>
    );
};
