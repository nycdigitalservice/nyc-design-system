;;; tangle.el --- Tangle a projects org files        -*- lexical-binding: t; -*-

;; Copyright (C) 2024  Michael Mausler

;; Author: Michael Mausler <michaelmausler@Michaels-MacBook-Air.local>
;; Keywords: convenience

;; This program is free software; you can redistribute it and/or modify
;; it under the terms of the GNU General Public License as published by
;; the Free Software Foundation, either version 3 of the License, or
;; (at your option) any later version.

;; This program is distributed in the hope that it will be useful,
;; but WITHOUT ANY WARRANTY; without even the implied warranty of
;; MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
;; GNU General Public License for more details.

;; You should have received a copy of the GNU General Public License
;; along with this program.  If not, see <https://www.gnu.org/licenses/>.

;;; Commentary:

;; 

;;; Code:
(setq gc-cons-threshold 100000000)
(setq org-confirm-babel-evaluate nil)
(setq org-id-locations nil)
(setq make-backup-files nil)

(defun get-org-files (directory)
  "Return a list of all Org files under the provided DIRECTORY."
  (let ((org-files '()))
    (dolist (file (directory-files-recursively directory "\\.org$"))
      (push file org-files))
    org-files))

(defun nyc/tangle-org-file (org-file)
  "Tangle a ORG-FILE."
  (with-current-buffer (find-file-noselect org-file)
    (org-babel-tangle)))

(defun nyc/tangle-org-files (directory)
  "Tangle all the org files in a given DIRECTORY."
  (let ((org-files (get-org-files directory)))
    (dolist (org-file org-files)
      (nyc/tangle-org-file org-file))
    (message "Tangling complete")))

(defun nyc/tangle-init (file-or-dir)
  "Check if we have a FILE-OR-DIR then tangle."
  (let* ((file-ext (file-name-extension file-or-dir))
         (is-org (string= file-ext "org")))
    (if is-org
        (nyc/tangle-org-file file-or-dir)
      (nyc/tangle-org-files file-or-dir))))

;;(setq mm (get-org-files "../src/composition/README.org"))
;; (setq org-confirm-babel-evaluate nil)
;; (nyc/tangle-org-files "./")

(provide 'tangle)
;;; tangle.el ends here
