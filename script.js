document.addEventListener('DOMContentLoaded', function() {
  // يمكنك إضافة أي تفاعلات JavaScript هنا إذا لزم الأمر
  console.log('Future Vision App is ready!');
  
  // تأكيد بدء تحميل الملف عند النقر على الزر
  const downloadButton = document.querySelector('.download-button');
  if (downloadButton) {
    downloadButton.addEventListener('click', function() {
      console.log('Starting download...');
      // يمكنك إضافة تتبع للتحميل هنا إذا أردت
    });
  }
});