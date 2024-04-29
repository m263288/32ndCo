<?php
$file = "example.txt"; // Path to your text file

// Modify the text file content
$fileContent = file_get_contents($file);
$newContent = $fileContent . "\nModified by JavaScript";
file_put_contents($file, $newContent);

echo "Text file modified successfully!";
?>
