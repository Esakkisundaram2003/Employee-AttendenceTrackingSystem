function leaveValidation(name, value, formValues = {}) {
  switch (name) {
    case "period":
      if (!value) return "Period is required";
      break;

    case "fromDate":
      if (!value) return "From date is required";
      break;

    case "toDate":
      if (!value) return "To date is required";
      if (formValues.fromDate && value < formValues.fromDate)
        return "To date cannot be before From date";
      break;

    default:
      return "";
  }
  return "";
}

export default leaveValidation;
