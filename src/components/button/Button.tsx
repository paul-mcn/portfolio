import { useGlobalStore } from "@/providers/GlobalStoreProvider";
import { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";
import HoverEffectContainer from "../cursor/HoverEffectContainer";

type Props = {
  label: string;
  containerClassName?: string;
  className?: string;
  href?: Url;
};

const Button = (props: Props) => {
  return (
    <HoverEffectContainer
      className={
        "text-2xl font-black group relative" +
        (props.containerClassName ? props.containerClassName : "")
      }
    >
      {props.href ? (
        <Link
          href={props.href}
          className={
            "text-2xl font-black text-slate-100 z-10 block pb-1 " +
            (props.className ? props.className : "")
          }
        >
          {props.label}
        </Link>
      ) : (
        props.label
      )}
      <div className="absolute -inset-4 z-0 border-2 opacity-0 transition duration-300 group-hover:opacity-100 border-slate-100"></div>
    </HoverEffectContainer>
  );
};

export default Button;
