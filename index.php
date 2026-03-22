<?php 
$pageTitle = '';
require_once 'includes/header.php';

// Fetch Featured Articles
$stmt = $pdo->query("
    SELECT a.*, c.name as category_name 
    FROM articles a 
    LEFT JOIN categories c ON a.category_id = c.id 
    WHERE a.status = 'published' AND a.is_featured = 1 
    ORDER BY a.created_at DESC LIMIT 3
");
$featuredArticles = $stmt->fetchAll();
?>

    <main>
        <section class="hero-tools">
            <div class="container">
                <div class="hero-content">
                    <h1 class="hero-title">Get measurable results from <span>online marketing</span></h1>
                    <p class="hero-subtitle">Do SEO, content marketing, competitor research, and PPC from just one platform.</p>
                    <div class="search-box-wrap">
                        <form class="hero-search-form" onsubmit="event.preventDefault(); window.location.href='index.php'; alert('Search feature coming soon!');">
                            <input type="text" placeholder="Enter domain, keyword or URL" required>
                            <button type="submit" class="btn btn-primary">Analyze <i class="fa-solid fa-magnifying-glass"></i></button>
                        </form>
                        <div class="popular-searches">
                            <span>Examples:</span>
                            <a href="#">google.com</a>
                            <a href="#">amazon.com</a>
                            <a href="#">semrush.com</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Platform Stats -->
        <section class="platform-overview">
            <div class="container">
                <div class="stats-grid">
                    <div class="stat-item">
                        <div class="stat-number">25B+</div>
                        <div class="stat-label">Keywords</div>
                    </div>
                    <div class="stat-item">
                        <div class="stat-number">800M+</div>
                        <div class="stat-label">Domains</div>
                    </div>
                    <div class="stat-item">
                        <div class="stat-number">140+</div>
                        <div class="stat-label">Geo Databases</div>
                    </div>
                    <div class="stat-item">
                        <div class="stat-number">10M+</div>
                        <div class="stat-label">Users</div>
                    </div>
                </div>
            </div>
        </section>

        <!-- SEO Tools Section -->
        <section class="section tools-section">
            <div class="container">
                <h2 class="section-title">Our SEO Toolkit</h2>
                <div class="tools-grid">
                    <div class="tool-card">
                        <div class="tool-icon"><i class="fa-solid fa-globe"></i></div>
                        <h3>Domain Overview</h3><p>Analyze organic and paid search performance.</p>
                        <a href="domain-overview.html" class="tool-link">Explore <i class="fa-solid fa-chevron-right"></i></a>
                    </div>
                    <div class="tool-card">
                        <div class="tool-icon"><i class="fa-solid fa-key"></i></div>
                        <h3>Keyword Research</h3><p>Find the best keywords to drive traffic.</p>
                        <a href="keyword-research.html" class="tool-link">Explore <i class="fa-solid fa-chevron-right"></i></a>
                    </div>
                    <div class="tool-card">
                        <div class="tool-icon"><i class="fa-solid fa-stethoscope"></i></div>
                        <h3>Site Audit</h3><p>Comprehensive health check of your website's SEO.</p>
                        <a href="#" class="tool-link">Explore <i class="fa-solid fa-chevron-right"></i></a>
                    </div>
                </div>
            </div>
        </section>

        <!-- Featured Articles (Dynamic) -->
        <section class="section" style="background: var(--surface);">
            <div class="container">
                <div class="flex-between">
                    <h2 class="section-title-left">Marketing Insights</h2>
                    <a href="blog.php" class="btn btn-outline btn-sm">View All Blog</a>
                </div>
                <div class="article-grid">
                    <?php if (empty($featuredArticles)): ?>
                        <p style="text-align: center; grid-column: 1/-1; padding: 3rem; color: var(--text-muted);">Please add featured articles in the admin panel to see them here.</p>
                    <?php else: ?>
                        <?php foreach ($featuredArticles as $article): ?>
                        <article class="article-card">
                            <img src="<?php echo $article['featured_image'] ? 'uploads/'.$article['featured_image'] : 'https://placehold.co/600x400?text=Velora+Insights'; ?>" class="article-image">
                            <div class="article-content">
                                <span class="category-tag"><?php echo htmlspecialchars($article['category_name'] ?? 'Marketing'); ?></span>
                                <h3 class="article-title"><a href="article.php?slug=<?php echo $article['slug']; ?>"><?php echo htmlspecialchars($article['title']); ?></a></h3>
                                <p class="article-excerpt"><?php echo substr(strip_tags($article['content']), 0, 120); ?>...</p>
                            </div>
                        </article>
                        <?php endforeach; ?>
                    <?php endif; ?>
                </div>
            </div>
        </section>

        <!-- Newsletter Section -->
        <div class="container">
            <section class="newsletter-section" style="margin-bottom: 5rem;">
                <h2>Ready to grow your visibility?</h2>
                <p style="color: var(--text-muted); margin-top: 0.5rem; margin-bottom: 2rem;">Join 10+ million marketers who use Velora for their SEO success.</p>
                <form class="newsletter-form" onsubmit="event.preventDefault(); alert('Subscribed successfully!'); this.reset();">
                    <input type="email" placeholder="Enter your email address" required style="flex: 1; padding: 1rem; border: 1px solid var(--border); border-radius: var(--radius-md);">
                    <button type="submit" class="btn btn-primary">Start Free Trial</button>
                </form>
            </section>
        </div>
    </main>

<?php require_once 'includes/footer.php'; ?>
