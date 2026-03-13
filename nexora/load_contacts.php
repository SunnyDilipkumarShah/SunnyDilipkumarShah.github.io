<?php
/**
 * Load contact entries from data/contacts.txt.
 * Format: one entry per line, "Label|Value" (pipe-separated).
 * Returns array of ['label' => string, 'value' => string].
 */
function load_contacts($baseDir = null) {
    if ($baseDir === null) {
        $baseDir = __DIR__;
    }
    $path = rtrim($baseDir, DIRECTORY_SEPARATOR) . DIRECTORY_SEPARATOR . 'data' . DIRECTORY_SEPARATOR . 'contacts.txt';
    $entries = [];
    if (!is_file($path)) {
        return $entries;
    }
    $lines = file($path, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
    foreach ($lines as $line) {
        $pos = strpos($line, '|');
        if ($pos !== false) {
            $entries[] = [
                'label' => trim(substr($line, 0, $pos)),
                'value' => trim(substr($line, $pos + 1)),
            ];
        }
    }
    return $entries;
}
