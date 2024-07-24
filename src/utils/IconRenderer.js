import React, { useEffect, useRef, useState } from "react";

export function AttrToIcon(name, options = {}) {
  const ImportedIconRef = useRef();
  const [, reRender] = useState(false);
  useEffect(() => {
    const importIcon = async () => {
      ImportedIconRef.current = (
        await import(`../assets/icons/${name}.jsx`)
      ).default;
      reRender(true);
    };
    importIcon();
  }, [name]);
  if (ImportedIconRef.current) {
    const Icon = ImportedIconRef.current;
    return <Icon {...options} />;
  }
  return null;
}
