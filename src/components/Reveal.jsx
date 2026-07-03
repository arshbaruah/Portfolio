import { useEffect, useRef, useState } from "react";

/** Fades content in when it scrolls into view. */
export default function Reveal({ children, as: Tag = "div", ...rest }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.12 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <Tag ref={ref} className={`reveal${visible ? " visible" : ""}`} {...rest}>
      {children}
    </Tag>
  );
}
