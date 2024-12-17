import { useState } from "react";
import styles from "./faq.module.scss";
import { GoPlusCircle, GoXCircle } from "react-icons/go";
import PropTypes from "prop-types";
import Button from "../button";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";

export function FAQ({ content, alignment, width, padding, color }) {
  const [currentId, setCurrentId] = useState(null);
  const { isVisible, elementRef } = useIntersectionObserver({
    threshold: 0.1, // Trigger animation when 5% of the component is visible
  });

  return (
    <section
      ref={elementRef}
      className={`${styles.faqSection} ${styles[alignment]} ${
        styles[padding]
      } ${styles[color]} ${isVisible ? "visible" : "hidden"}`}
    >
      {content.header && <h2>{content.header}</h2>}
      {content.questions.map((pair) => {
        return (
          <div
            key={pair.id}
            className={`${styles.faqContainer} ${styles[width]}`}
          >
            <div className={styles.question}>
              <p>{pair.question}</p>
              {pair.id === currentId ? (
                <GoXCircle onClick={() => setCurrentId(null)} />
              ) : (
                <GoPlusCircle onClick={() => setCurrentId(pair.id)} />
              )}
            </div>
            <div
              className={
                pair.id === currentId
                  ? `${styles.dropDown}`
                  : `${styles.dropDown} ${styles.hide}`
              }
            >
              <p>{pair.answer}</p>
              {pair.button && (
                <Button
                  type={pair.button.type}
                  text={pair.button.text}
                  link={pair.button.link}
                />
              )}
            </div>
          </div>
        );
      })}
    </section>
  );
}

FAQ.propTypes = {
  content: PropTypes.object,
  alignment: PropTypes.string,
  width: PropTypes.string,
  padding: PropTypes.string,
  color: PropTypes.string,
};
