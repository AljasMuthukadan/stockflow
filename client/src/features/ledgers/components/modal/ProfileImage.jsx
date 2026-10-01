import { useEffect, useRef, useState } from "react";
import {
  Camera,
  ChevronDown,
  ImagePlus,
  X,
} from "lucide-react";

const ProfileImage = ({
  formData,
  handleImageChange,
  toggleSection,
  openSection,
}) => {
  const fileInputRef = useRef(null);

  const [previewUrl, setPreviewUrl] =
    useState(null);

  // =========================================================
  // IMAGE PREVIEW
  // =========================================================

  useEffect(() => {
    if (!formData.image) {
      setPreviewUrl(null);
      return;
    }

    // Existing image URL from backend
    if (typeof formData.image === "string") {
      setPreviewUrl(formData.image);
      return;
    }

    // Newly selected File
    const url = URL.createObjectURL(
      formData.image
    );

    setPreviewUrl(url);

    return () => {
      URL.revokeObjectURL(url);
    };
  }, [formData.image]);

  // =========================================================
  // SELECT IMAGE
  // =========================================================

  const handleSelectImage = () => {
    fileInputRef.current?.click();
  };

  // =========================================================
  // REMOVE IMAGE
  // =========================================================

  const handleRemoveImage = () => {
    handleImageChange(null);

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <section className="overflow-hidden rounded-xl border border-slate-200">
      {/* HEADER */}

      <button
        type="button"
        onClick={() =>
          toggleSection("profileImage")
        }
        className="
          flex
          w-full
          items-center
          justify-between
          px-4
          py-3
          text-left
          transition
          hover:bg-slate-50
        "
      >
        <div className="flex items-center gap-3">
          <div
            className="
              flex
              h-8
              w-8
              items-center
              justify-center
              rounded-lg
              bg-emerald-50
            "
          >
            <Camera
              size={16}
              className="text-emerald-600"
            />
          </div>

          <div>
            <h3 className="text-sm font-semibold text-slate-800">
              Profile Image
            </h3>

            <p className="text-xs text-slate-400">
              Add a logo or profile image
            </p>
          </div>
        </div>

        <ChevronDown
          size={17}
          className={`
            text-slate-400
            transition-transform
            ${
              openSection === "profileImage"
                ? "rotate-180"
                : ""
            }
          `}
        />
      </button>

      {/* CONTENT */}

      {openSection === "profileImage" && (
        <div className="border-t border-slate-100 p-4">
          <input
            ref={fileInputRef}
            type="file"
            accept="image/png,image/jpeg,image/webp"
            onChange={(e) =>
              handleImageChange(
                e.target.files?.[0] || null
              )
            }
            className="hidden"
          />

          <div className="flex flex-col items-center gap-4 sm:flex-row">
            {/* PREVIEW */}

            <div
              className="
                relative
                flex
                h-24
                w-24
                shrink-0
                items-center
                justify-center
                overflow-hidden
                rounded-2xl
                border
                border-dashed
                border-slate-300
                bg-slate-50
              "
            >
              {previewUrl ? (
                <>
                  <img
                    src={previewUrl}
                    alt="Ledger preview"
                    className="h-full w-full object-cover"
                  />

                  <button
                    type="button"
                    onClick={handleRemoveImage}
                    className="
                      absolute
                      right-1.5
                      top-1.5
                      flex
                      h-6
                      w-6
                      items-center
                      justify-center
                      rounded-full
                      bg-black/60
                      text-white
                      transition
                      hover:bg-black/80
                    "
                  >
                    <X size={13} />
                  </button>
                </>
              ) : (
                <ImagePlus
                  size={28}
                  className="text-slate-400"
                />
              )}
            </div>

            {/* UPLOAD */}

            <div className="min-w-0">
              <button
                type="button"
                onClick={handleSelectImage}
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-lg
                  border
                  border-slate-200
                  bg-white
                  px-3
                  py-2
                  text-sm
                  font-medium
                  text-slate-700
                  transition
                  hover:bg-slate-50
                "
              >
                <ImagePlus size={16} />

                {formData.image
                  ? "Change Image"
                  : "Upload Image"}
              </button>

              <p className="mt-2 text-xs text-slate-400">
                PNG, JPG or WebP. Recommended size:
                256 × 256px.
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProfileImage;