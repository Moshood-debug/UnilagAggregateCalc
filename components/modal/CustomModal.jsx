import { IconX, IconExclamationCircle } from "@tabler/icons-react";

export function CustomModal({ onClose }) {
  return (
    <div className="custom-modal-overlay" onClick={onClose}>
      <div
        className="custom-modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="custom-modal-header flex justify-between items-center">
          <h3 className="text-lg font-semibold text-gray-800">
            About UNILAG Aggregate Score
          </h3>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 cursor-pointer"
          >
            <IconX className="w-5 h-5" />
          </button>
        </div>

        <div className="text-gray-600 space-y-3">
          <p>
            The University of Lagos (UNILAG) calculates admission aggregate
            scores using:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>50% of your JAMB score (out of 400)</li>
            <li>30% of your Post-UTME score (out of 30)</li>
            <li>20% of your O'Level grades (5 relevant subjects)</li>
          </ul>
          <p>
            The formula is:{" "}
            <span className="font-medium">
              (JAMB ÷ 8) + (Post-UTME) + (O'Level Points ÷ 5)
            </span>
          </p>
          <p className="pt-2 text-sm flex items-center gap-2 text-gray-500">
            <IconExclamationCircle className="w-4 h-4" />
            Cut-off marks vary by department and year.
          </p>
        </div>
      </div>
    </div>
  );
}
