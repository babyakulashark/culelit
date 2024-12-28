// Assume these are predefined utility functions
function isFieldDef(field) {
    return field && typeof field === 'object' && 'field' in field;
}

function isBinned(bin) {
    return bin === true || (typeof bin === 'object' && bin.binned === true);
}

// An example field definition
const x = {
    field: 'age',
    type: 'quantitative',
    bin: { binned: true } // or simply `bin: true`
};

if (isFieldDef(x) && isBinned(x.bin)) {
    // Code to handle binned fields
    console.log('Field is binned:', x.field);
} else {
    // Code to handle non-binned fields
    console.log('Field is not binned:', x.field);
}
