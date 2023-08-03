
import { ReactNode } from "react";

interface GlobalProps {
    children: ReactNode;
}

function Global({ children }: GlobalProps) {
    return (
        <>{children}</>
    );
}

export default Global;
