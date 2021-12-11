function validateSysPath2() {
    let element = document.getElementById('sys_path2')
    let pattern = '^[A-Za-z]:\\\\(windows|winnt|win|dos|msdos)(\\\\[^\\\\]*)?$';
    let regex = new RegExp(pattern, 'i');
    if (element.value.length === 0) {
        element.classList.remove('invalid');
        element.classList.remove('valid');
    } else {
        let isValid = regex.test(element.value);

        if (isValid) {
            element.classList.remove('invalid');
            element.classList.add('valid');
        } else {
            element.classList.remove('valid');
            element.classList.add('invalid');
        }
    }
}