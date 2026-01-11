var t="[0-9A-Za-zd$@$!%*?&]{8,}";function o(a){let s=a.get("password")?.value,r=a.get("repeatPassword")?.value;return!s||!r||s===r?null:{passwordMismatch:!0}}export{t as a,o as b};
