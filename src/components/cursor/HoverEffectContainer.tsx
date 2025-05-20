import { useGlobalStore } from "@/providers/GlobalStoreProvider";
import { GlobalStore } from "@/stores/globalStore";

type Props = {
  children: React.ReactNode;
  className?: string;
  variantSize?: GlobalStore["cursorVariantSize"];
};

const HoverEffectContainer = (props: Props) => {
  const setCursorVariant = useGlobalStore((state) => state.setCursorVariant);
  const setCursorVariantSize = useGlobalStore(
    (state) => state.setCursorVariantSize,
  );
  const handleMouseEnter = () => {
    setCursorVariant("text");
    if (props.variantSize?.text) {
      setCursorVariantSize(props.variantSize);
    }
  };
  const handleMouseLeave = () => {
    setCursorVariant("default");
    if (props.variantSize?.default) {
      setCursorVariantSize(props.variantSize);
    }
  };
  return (
    <div
      className={props.className}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {props.children}
    </div>
  );
};

export default HoverEffectContainer;
