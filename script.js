document.addEventListener('DOMContentLoaded', () => {
    const navItems = document.querySelectorAll('.nav-item');
    const tabContents = document.querySelectorAll('.tab-content');

    navItems.forEach(item => {
        item.addEventListener('click', () => {
            // إزالة الكلاس active من كل الأزرار
            navItems.forEach(nav => nav.classList.remove('active'));
            // إضافة الكلاس active للزر المضغوط
            item.classList.add('active');

            // إخفاء كل التبويبات
            tabContents.forEach(tab => tab.classList.remove('active'));

            // إظهار التبويب المطلوب بناءً على data-target
            const targetId = item.getAttribute('data-target');
            document.getElementById(targetId).classList.add('active');
        });
    });
});
