export function formatFieldName(fieldName: string): string {
    // Replace camelCase transitions with spaces
    const spacedString = fieldName.replace(/([a-z])([A-Z])/g, '$1 $2');
  
    // Capitalize the first letter
    return spacedString.charAt(0).toUpperCase() + spacedString.slice(1);

}