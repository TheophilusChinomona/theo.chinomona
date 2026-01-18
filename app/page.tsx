import dynamic from "next/dynamic";

const ComponentExample = dynamic(
    () => import("@/components/component-example").then((mod) => mod.ComponentExample),
    { ssr: false }
);

export default function Page() {
    return <ComponentExample />;
}