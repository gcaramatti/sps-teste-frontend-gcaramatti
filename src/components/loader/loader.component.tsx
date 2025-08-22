import type { ILoaderProps } from "./loader.types";

export function Loader(props: ILoaderProps) {
    if (!props.isLoading) {
        return null;
    }

    return (
        <div className="fixed inset-0 w-full h-screen bg-white/80 flex flex-col justify-center items-center z-[999999] cursor-default">
            <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin" />
            <p className="mt-2 text-[2.1rem] text-primary">Carregando</p>
        </div>
    )
}