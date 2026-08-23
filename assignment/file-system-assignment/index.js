const fs = require('fs');

// TASK 1: Create File
const initialData = `krish shinde
Course: Full Stack Development
Technology: Node.js
`;

fs.writeFile('student.txt', initialData, (err) => {
    if (err) {
        console.error('Error writing file:', err);
        return;
    }
    console.log('File created successfully');
});

    // TASK 2: Read File
    fs.readFile('student.txt', 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading file:', err);
            return;
        }
        console.log('\nReading student.txt:');
        console.log(data);
    });
// TASK 3: Append File
        const additionalData = `Experience: 1 Year
City: Kolkata
`;
        fs.appendFile('student.txt', additionalData, (err) => {
            if (err) {
                console.error('Error appending data:', err);
                return;
            }
            console.log('Task 3: Data updated successfully');
        });
// --- TASK 4: Rename File ---
            fs.rename('student.txt', 'studentDetails.txt', (err) => {
                if (err) {
                    console.error('Error renaming file:', err);
                    return;
                }
                console.log('\nTask 4: File renamed to studentDetails.txt');
            });
// --- TASK 5: Delete File ---
            fs.unlink('studentDetails.txt', (err) => {
                if (err) {
                    console.error('Error deleting file:', err);
                    return;
                    }
                console.log('Task 5: studentDetails.txt deleted successfully');
            });