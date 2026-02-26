function shareBiz(platform) {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent("Streamline your business with BizToolHub - Fleet logs, Invoices, and more!");
    let shareUrl = "";

    if (platform === 'linkedin') shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;
    if (platform === 'facebook') shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
    if (platform === 'twitter') shareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${text}`;

    window.open(shareUrl, '_blank', 'width=600,height=450');
}

function copyBizLink() {
    navigator.clipboard.writeText(window.location.href);
    const btn = document.getElementById('bizCopyBtn');
    const originalIcon = btn.innerHTML;
    btn.innerHTML = '<i class="fa-solid fa-check" style="color: #00d4ff;"></i>';
    setTimeout(() => { btn.innerHTML = originalIcon; }, 2000);
}
