"use client"
import { useLineTime } from "@/stores/useLineItem";

export const ShortText = () => {
  const { label, required } = useLineTime();

  const codeString = `    <style>
      .custom.form__label {
        margin-bottom: 0.6rem;
      }
      .field.custom {
        margin-top: 0;
      }
      .custom .field__input {
        padding: 0.8rem;
      }
    </style>

    <div class="field custom">
      <label class="form__label custom" for="${label}">${label}</label>
      <input 
        class="field__input" 
        form="{{ 'product-form-' | append: section.id }}"
        type="text" 
        id="${label}" 
        name="properties[${label}]"
        ${required ? 'required' : ''}
      />
    </div>
    
    ${required ? `<script>
      document.addEventListener("DOMContentLoaded", () => {
        document.querySelector("form[novalidate]").removeAttribute("novalidate");
      });
    </script>` : ''}`;

  return (
    <div>
      <pre><code>{codeString}</code></pre>
    </div>
  );
};

export const ShortTextPreview = () => {
  const { label } = useLineTime();

  return (
    <div>
      <div className="rosyui-preview">
        <label className="rosyui-preview" htmlFor={label}>{label}</label>
        <input
          className="rosyui-preview"
          type="text"
          id={label}
          name={label}
          
        />
      </div>
    </div>
  );
};
