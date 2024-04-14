import { FC, useEffect, useRef, useState } from "react";
import styles from "./index.module.scss";
import cx from "classnames";

type Props = {
  text: string;
  className?: string;
};

export const ExpandableText: FC<Props> = ({ text, className }) => {
  const textRef = useRef<HTMLParagraphElement>(null);
  const [isClamped, setIsClamped] = useState(true);
  const [showToggle, setShowToggle] = useState(true);

  useEffect(() => {
    const hasClamping = (el: HTMLParagraphElement) => {
      const { clientHeight, scrollHeight } = el;
      return clientHeight !== scrollHeight;
    };

    const checkToggleDisplay = () => {
      if (!textRef.current) {
        return;
      }

      const hadClampClass = textRef.current.classList.contains("clamp");

      if (!hadClampClass) {
        textRef.current.classList.add("clamp");
      }
      setShowToggle(hasClamping(textRef.current));

      if (!hadClampClass) {
        textRef.current.classList.remove("clamp");
      }
    };

    checkToggleDisplay();
    window.addEventListener("resize", checkToggleDisplay);

    return () => {
      window.removeEventListener("resize", checkToggleDisplay);
    };
  }, [textRef]);

  return (
    <>
      <p
        ref={textRef}
        className={cx(className, styles.noMargin, {
          [styles.clampedText]: isClamped,
        })}
      >
        {text}
      </p>
      {showToggle && (
        <span
          className={styles.toggle}
          onClick={() => setIsClamped((prevState) => !prevState)}
        >
          Read {`${isClamped ? "more" : "less"}`}
        </span>
      )}
    </>
  );
};
