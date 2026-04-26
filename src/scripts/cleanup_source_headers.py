import os
import re

dir_path = "/Users/andrewcarrothers/Desktop/CanadianOptimizer/blog-posts"
pattern = re.compile(r"<header>.*?</header>", re.DOTALL)

for category in ["taxes", "retirement"]:
    cat_dir = os.path.join(dir_path, category)
    if not os.path.exists(cat_dir):
        continue
    for filename in os.listdir(cat_dir):
        if filename.endswith(".html"):
            file_path = os.path.join(cat_dir, filename)
            with open(file_path, "r", encoding="utf-8") as f:
                content = f.read()
            
            new_content = pattern.sub("", content)
            
            if new_content != content:
                with open(file_path, "w", encoding="utf-8") as f:
                    f.write(new_content)
                print(f"Cleaned {filename}")
